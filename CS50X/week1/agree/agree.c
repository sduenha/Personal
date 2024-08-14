#include <C:\CS50X\cs50.h>
#include <stdio.h>

int main(void)
{
    char yes_or_no = get_char("Do you agree? ");

    if (yes_or_no == 'y' || yes_or_no == 'Y')
    {
        printf("I agree too!");
    }
    else if (yes_or_no == 'n' || yes_or_no == 'N')
    {
        printf("I don't agree too!");
    }
    else
    {
        yes_or_no = get_char("Do you agree? ");
    }
}