# Mixed Messages

## Brief Description

This program will generate a random message based on the critically acclaimed MMORPG FINAL FANTASY XIV that has a free trial up to level 60 including the Heavensward expansion. Based on the random selection of the first third of the message, it will pick from a sliced selection for the second and then third, to ensure that the message will always make sense. 

Doing this, two functions are used, a random number generator to pick a string from the array (full or sliced), using array.length and Math methods random and floor to pick an integer within the indices of the array used. Another contains the arrays and uses an if loop to slice the middle and ending arrays dependant on what the string contains already. 

By Macaulay Eden @EdenExperiments