#include <C:\CS50X\cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main(void)
{
    string s = get_string("Before: ");
    printf("After: ");
    for (int i = 0, n = strlen(s); i < n; i++)
    {
        // Turning strings to upper case without library
        // if (s[i] >= 'a' && s[i] <= 'z')
        // {
        //     printf("%c", s[i] - 32);
        // }
        // else
        // {
        //     printf("%c", s[i]);
        // }

        // Turning string to upper case with the function islower from libary ctype.h
        // if (islower(s[i]))
        // {
        //     printf("%c", s[i] - 32);
        // }
        // else
        // {
        //     printf("%c", s[i]);
        // }

        // Turning string to upper case with the function toupper from libary ctype.h
        printf("%c", toupper(s[i]));
    }
    printf("\n");
}