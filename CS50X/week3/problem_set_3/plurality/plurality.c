#include <C:\CS50X\cs50.h>
#include <stdio.h>
#include <string.h>

int voter_count = 0;

// Max number of candidates
#define MAX 9

// Candidates have name and vote count
typedef struct
{
    string name;
    int votes;
} candidate;

// Array of candidates
candidate candidates[MAX];

// Number of candidates
int candidate_count;

// Function prototypes
bool vote(string name);
bool string_comparasing(string first_string, string secound_string);
void print_winner(void);

int main(int argc, string argv[])
{
    // Check for invalid usage
    if (argc < 2)
    {
        printf("Usage: plurality [candidate ...]\n");
        return 1;
    }

    // Populate array of candidates
    candidate_count = argc - 1;
    if (candidate_count > MAX)
    {
        printf("Maximum number of candidates is %i\n", MAX);
        return 2;
    }
    for (int i = 0; i < candidate_count; i++)
    {
        candidates[i].name = argv[i + 1];
        candidates[i].votes = 0;
    }

    voter_count = get_int("Number of voters: ");

    // Loop over all voters
    for (int i = 0; i < voter_count; i++)
    {
        string name = get_string("Vote: ");

        // Check for invalid vote
        if (!vote(name))
        {
            printf("Invalid vote.\n");
        }
    }

    // Display winner of election
    print_winner();
}

// Update vote totals given a new vote
bool vote(string name)
{
    for (int i = 0; i < candidate_count; i++)
    {
        int iquals = string_comparasing(name, candidates[i].name);

        if (iquals == 0)
        {
            candidates[i].votes++;
            return true;
        }
    }

    return false;
}

// Check if the name of the candidate is equals to the name on the vote
bool string_comparasing(string first_string, string secound_string)
{
    int index = 0;

    while (first_string[index] == secound_string[index])
    {
        if (first_string[index] == '\0' || secound_string[index] == '\0')
        {
            break;
        }
        index++;
    }

    if (first_string[index] == '\0' && secound_string[index] == '\0')
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

// Print the winner (or winners) of the election
void print_winner(void)
{
    int winner_votes;
    string winner[MAX];
    int winners = 0;

    for (int i = 0; i < candidate_count; i++)
    {
        if (candidates[i].votes > winner_votes)
        {
            winner[0] = candidates[i].name;
            winner_votes = candidates[i].votes;
        }
        else if (candidates[i].votes == winner_votes)
        {
            winner[i] = candidates[i].name;
            winners++;
        }
    }

    do
    {
        printf("%s\n", winner[winners]);
        winners--;
    } while (winners > -1);

    return;
}