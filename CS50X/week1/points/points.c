#include <C:\CS50X\cs50.h>
#include <stdio.h>

int main(void)
{
    const int MINE_POINTS = 2;
    int points = get_int("How many points did you lose? ");

    if (points < MINE_POINTS)
    {
        printf("You lost fewer points than David.\n");
    }
    else if (points > MINE_POINTS)
    {
        printf("You lost more points than David.\n");
    }
    else
    {
        printf("You lost the same numbers of points as David.\n");
    }
}
