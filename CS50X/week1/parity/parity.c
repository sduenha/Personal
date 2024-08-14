#include <C:\CS50X\cs50.h>
#include <stdio.h>

int main(void)
{
    int number = get_int("Choose a number: ");

    if (number % 2 == 0)
    {
        printf("The number %i is even\n", number);
    }
    else
    {
        printf("The number %i is odd\n", number);
    }
}