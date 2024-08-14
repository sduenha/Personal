#include <C:\CS50X\cs50.h>
#include <stdio.h>

int main(void)
{
    int number_of_scores = get_float("How many scores? ");

    int scores[number_of_scores];

    for (int i = 0; i < number_of_scores; i++)
    {
        scores[i] = get_int("Score %i: ", i + 1);
    }

    int total_grade;
    for (int i = 0; i < number_of_scores; i++)
    {
        total_grade += scores[i];
    }
    float avarege = total_grade / (float)number_of_scores;
    printf("Avarege: %.1f\n", avarege);
}
