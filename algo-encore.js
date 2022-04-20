/* 
we have an array

const k = 17

if sum of 2 numbers in array = k 
    => true
else
    => false

Logic : 
- Les nombres doivent tous 1 fois :
    - se comparer
    - s'additionner
    On arrête la boucle si :
    - si résultat = k
        return true, break
    On continue la boucle tant que condition pas trouvée, si tous les chiffres sont additionnés par pair et qu'aucun ne sont = à k alors false.
    - else 
        return false, aller au prochain chiffre
*/


