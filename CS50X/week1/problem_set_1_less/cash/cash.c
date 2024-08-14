#include <C:\CS50X\cs50.h>
#include <stdio.h>

int get_cents(void);
int calculate_quarters(int cents);
int calculate_dimes(int cents);
int calculate_nickels(int cents);
int calculate_pennies(int cents);

int main(void)
{
    // Ask how many cents the customer is owed
    int cents = get_cents();

    printf("The customer will receive:");

    // Calculate the number of quarters to give the customer
    int quarters = calculate_quarters(cents);
    string string_quarters;
    if (quarters == 0)
    {
        printf("");
    }
    else if (quarters == 1)
    {
        printf(" one quarter,");
    }
    else
    {
        printf(" %i quarters,", quarters);
    }
    cents = cents - quarters * 25;

    // Calculate the number of dimes to give the customer
    int dimes = calculate_dimes(cents);
    string string_dimes;
    if (dimes == 0)
    {
        printf("");
    }

    else if (dimes == 1)
    {
        printf(" one dime,");
    }
    else
    {
        printf(" %i dimes,", dimes);
    }

    cents = cents - dimes * 10;

    // Calculate the number of nickels to give the customer
    int nickels = calculate_nickels(cents);
    string string_nickels;
    if (nickels == 0)
    {
        printf("");
    }
    else if (nickels == 1)
    {
        printf(" one nickel,");
    }
    else
    {
        printf(" %i nickels,", nickels);
    }

    cents = cents - nickels * 5;

    // Calculate the number of pennies to give the customer
    int pennies = calculate_pennies(cents);
    string string_pennies;
    if (pennies == 0)
    {
        printf("");
    }
    else if (pennies == 1)
    {
        printf(" one penny,");
    }
    else
    {
        printf(" %i pennies, ", pennies);
    }

    cents = cents - pennies * 1;

    // Sum coins
    int coins = quarters + dimes + nickels + pennies;
    string string_coins;
    if (coins == 0)
    {
        printf(" zero coins.\n");
    }
    else if (coins == 1)
    {
        printf(" totalizing one coin.\n");
    }
    else
    {
        printf(" totalizing %i coins.\n", coins);
    }
}

int get_cents(void)
{
    int cents;
    do
    {
        cents = get_int("How many cents does the customer is owed? ");
    } while (cents < 0);

    return cents;
}

int calculate_quarters(int cents)
{
    int quarters = 0;
    while (cents - 25 >= 0)
    {
        cents -= 25;
        quarters++;
    }

    return quarters;
}

int calculate_dimes(int cents)
{
    int dimes = 0;
    while (cents - 10 >= 0)
    {
        cents -= 10;
        dimes++;
    }

    return dimes;
}

int calculate_nickels(int cents)
{
    int nickels = 0;
    while (cents - 5 >= 0)
    {
        cents -= 5;
        nickels++;
    }

    return nickels;
}

int calculate_pennies(int cents)
{
    int pennies = 0;
    while (cents - 1 >= 0)
    {
        cents -= 1;
        pennies++;
    }

    return pennies;
}
