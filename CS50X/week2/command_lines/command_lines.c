#include <C:\CS50X\cs50.h>
#include <stdio.h>

// argc -> argument count -> stores how many words the human typed at the prompt
// argv -> argument vector -> array of all the words that the human typed at the prompt
int main(int argc, string argv[])
{
    if (argc == 2)
    {
        printf("Hello, %s\n", argv[1]);
    }
    else
    {
        printf("Hello, world\n");
    }
}