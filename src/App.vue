<template>
  <MenuContent v-model:show="this.dialogVisibility" @restartApp="this.restart"
  v-model:status="this.status">
</MenuContent>
  <BtnElement v-if="!this.game.status" class="btnReset" @click=" ShowDialog">Рестарт</BtnElement>
  <TimerArea :status="this.game.timer"></TimerArea>
  <gameOverBanner v-show="!this.game.status" :mes="this.winMes"></gameOverBanner>
  <section class="field">
        <Cell 
        @clickCell="this.clickOnCell"
        v-for="cell in this.fieldState" :key="cell.id"
        :cross="this.status.cross" v-bind:cell="cell"></Cell>
  </section>
</template>

<script >
import Cell from '@/components/Cell'
import TimerArea from '@/components/TimerArea';
import MenuContent from '@/components/MenuContent';
import gameOverBanner from '@/components/gameOverBanner';

import  FieldState  from '@/data/fieldState';
import victory from '@/logic/victory'
import {selectCell} from '@/logic/botAction'
import BtnElement from '@/components/UI/BtnElement';

export default ({
  name: 'App',
  data() {
        return {
            fieldState: FieldState(),
            game: {status:true,
                  timer:false},
            status: {
                  cross: false,
                  dif: false,
                  botStep: false,
            },
            winMes: 'Победа',
            dialogVisibility: true,
    }},
    methods: {
        CloseDialoge() {
          this.dialogVisibility = false},

        ShowDialog() {this.dialogVisibility = true},

        clickOnCell(cell, player = true) {
          if (!cell.state && this.game.status) {
              this.fieldState[cell.id] = {id:cell.id,
                                  state: true, player: player}
            
              if (victory(this.fieldState)) 
              {
                (player) ? this.winMes = 'Победа': this.winMes = 'Поражение' 
                this.game.status = false;//Победа
                this.game.timer = false;
              }
              else if (player) {
                  const cell = selectCell([...this.fieldState],this.status.dif);
                  if (cell)
                    this.clickOnCell(cell, !player) 
                  else {
                    this.winMes = 'Ничья'
                    this.game.status = false; //Ничья
                    this.game.timer = false;
                  }
              }
          }
        },
    
        restart() {
            this.fieldState = FieldState();
            this.CloseDialoge();
            this.game.timer = true;
            this.game.status = true;
            if (this.status.botStep)
            { 
              const cell = selectCell([...this.fieldState],this.status.dif);
              this.clickOnCell(cell,false) 
            }
          }
    },
    components: { Cell, TimerArea, MenuContent, BtnElement, gameOverBanner },
});
</script>

<style >
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Comfortaa', cursive;
  }

  .h1,h2{
    text-align: center;
    -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;   /* Chrome/Safari/Opera */
  -khtml-user-select: none;    /* Konqueror */
  -moz-user-select: none;      /* Firefox */
  -ms-user-select: none;       /* Internet Explorer/Edge */
  user-select: none;   
  }


  #app{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f0;
    overflow:hidden;
  }

  .field{
        width: 25rem;
        height: 25rem;
        display: grid;
        grid: repeat(3,1fr) / repeat(3,1fr);
        gap:5px;
        background-color: #fed6a0;
        border: 5px #fed6a0 solid;
    }

  .btnReset{
        width: 25rem;
        height: 4rem;
        position: absolute;
        font-size: 35px;
        margin-top: -35rem;
  }

  @media screen and ((max-width: 410px) or (max-height: 640px))  {
    .field{
        width: 20rem;
        height: 20rem;
    }
    .btnReset{
      width: 20rem;
    }
  }

  @media screen and (max-height: 640px)  {

    .btnReset{
      margin-top: -30rem;
    }
  }


</style>
z