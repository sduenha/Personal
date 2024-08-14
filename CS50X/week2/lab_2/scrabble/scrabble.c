#include <ctype.h>
#include <C:\CS50X\cs50.h>
#include <stdio.h>
#include <string.h>

// Points assigned to each letter of the alphabet
int POINTS[] = {1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10};
int LETTERS[] = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'j', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'};

int compute_score(string word);

int main(void)
{
    // Get input words from both players
    string word1 = get_string("Player 1: ");
    string word2 = get_string("Player 2: ");

    // Score both words
    int score1 = compute_score(word1);
    int score2 = compute_score(word2);

    // TODO: Print the winner
    if (score1 > score2)
    {
        printf("Player 1 wins! With %i points against %i\n", score1, score2);
    }
    else if (score1 < score2)
    {
        printf("Player 2 wins! With %i points against %i\n", score2, score1);
    }
    else
    {
        printf("Tie! Both with %i points\n", score1);
    }
}

int compute_score(string word)
{
    int points = 0;
    for (int i = 0, length = strlen(word); i < length; i++)
    {
        for (int j = 0; j < 26; j++)
        {
            if (toupper(word[i]) == LETTERS[j])
            {
                points += POINTS[j];
                break;
            }
        }
    }
    return points;
}
