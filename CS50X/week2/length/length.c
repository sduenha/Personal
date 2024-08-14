// To discovery the length of an variable you can or use the library <string.h> or you can white an function
#include <C:\CS50X\cs50.h>
#include <stdio.h>
#include <string.h>

// int string_length(string name);

int main(void)
{
    string name = get_string("Write something: ");

    int length = strlen(name);
    printf("%i\n", length);

    // int length = string_length(name);
    // printf("%i\n", length);
}

// int string_length(string name)
// {
//     int i = 0;
//     while (name[i] != '\0')
//     {
//         i++;
//     }
//     return i;
// }