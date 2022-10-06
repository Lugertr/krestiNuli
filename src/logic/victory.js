export default function(fieldState) {

    if ((fieldState[0].player!== null && //Проверка 1 горизонтали
        fieldState[0].player === fieldState[1].player  && fieldState[0].player  === fieldState[2].player) ||

        (fieldState[3].player!== null && //Проверка 2 горизонтали
        fieldState[3].player === fieldState[4].player  && fieldState[3].player  === fieldState[5].player) ||

        (fieldState[6].player!== null && //Проверка 3 горизонтали
        fieldState[6].player === fieldState[7].player  && fieldState[6].player  === fieldState[8].player) ||

        (fieldState[0].player!== null && //Проверка 1 вертикали
        fieldState[0].player === fieldState[3].player  && fieldState[0].player  === fieldState[6].player) ||

        (fieldState[1].player!== null && //Проверка 2 вертикали
        fieldState[1].player === fieldState[4].player  && fieldState[1].player  === fieldState[7].player) ||

        (fieldState[2].player!== null && //Проверка 3 вертикали
        fieldState[2].player === fieldState[5].player  && fieldState[2].player  === fieldState[8].player) ||


        (fieldState[0].player!== null && //Проверка 1 диагонали
        fieldState[0].player === fieldState[4].player  && fieldState[0].player  === fieldState[8].player) ||

        (fieldState[2].player!== null && //Проверка 1 диагонали
        fieldState[2].player === fieldState[4].player  && fieldState[2].player  === fieldState[6].player))
        
        return true

    return false
}
