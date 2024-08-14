#include <C:\CS50X\cs50.h>
#include <stdio.h>

int main(void)
{

    int n;
    do
    {
        n = get_int("Width: ");
    } while (n < 1 || n > 8);

    // int times = get_int("How many points do you want? ");
    for (int i = 0; i < n; i++)
    {
        printf("?");
    }
    printf("\n");
}