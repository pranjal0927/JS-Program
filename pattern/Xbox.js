let str = ''

for(i = 1; i<= 5; i ++)
{
    for(j = 1; j <= i; j++)
    {
        if(i == j)
        {
            str += '* '
        }
        else if((i == 1 && j == 5)||(i == 2 && j == 4)||(i == 4 && j == 2)||(i == 5 && j == 1))
        {
            str += '* '

        }
        else
        {
            str += " "
        }
    }
str += '\n'
}
console.log(str)