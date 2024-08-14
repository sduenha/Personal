// Modifies the volume of an audio file

#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

// Number of bytes in .wav header
const int HEADER_SIZE = 44;

int main(int argc, char *argv[])
{
    // Check command-line arguments
    if (argc != 4)
    {
        printf("Usage: ./volume input.wav output.wav factor\n");
        return 1;
    }

    // Open files and determine scaling factor
    FILE *input = fopen(argv[1], "r");
    if (input == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    FILE *output = fopen(argv[2], "w");
    if (output == NULL)
    {
        printf("Could not open file.\n");
        return 1;
    }

    float factor = atof(argv[3]);

    // Number of bytes in the whole file
    fseek(input, 0, SEEK_END);
    const int SIZE = ftell(input);
    fseek(input, 0, SEEK_SET);

    // TODO: Copy header from input file to output file
    uint8_t header[HEADER_SIZE];
    fread(header, HEADER_SIZE, 1, input);
    fwrite(header, HEADER_SIZE, 1, output);

    // TODO: Read samples from input file and write updated data to output file
    int16_t buffer;
    // int num;
    //  while (fread(&buffer, sizeof(int16_t), 1, input))
    //  {
    //      // Update volume
    //      buffer *= factor;
    //      fwrite(&buffer, sizeof(int16_t), 1, output);
    //      num++;
    //      printf("\n%i\n", num);
    //  }
    for (int i = 0; i < (SIZE - HEADER_SIZE) / 2; i++)
    {
        int read = fread(&buffer, sizeof(int16_t), 1, input);
        // buffer *= factor;
        fwrite(&buffer, sizeof(int16_t), 1, output);
        printf("\n%i\n", i);

        if (read == 0)
        {
            printf("\nNão tá mais lendo\n");
        }

        if (i > 400000)
        {
            break;
            printf("Deu merda");
        }
    }

    // Close files
    fclose(input);
    fclose(output);
}