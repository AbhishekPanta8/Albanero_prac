#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
int main()
{
    int a[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    int oddSum= 0, evenSum = 0, n, i;
    n = fork();

    if (n > 0) {
        for (i = 0; i < 10; i++) {
            if (a[i] % 2 == 0)
                evenSum = evenSum + a[i];
        }
        printf("Parent process \n") ;
        printf("Sum of even no. is %d",&evenSum );
    }
  
    else {
        for (i = 0; i < 10; i++) {
            if (a[i] % 2 != 0)
                oddSum= oddSum+ a[i];
        }
        printf("Child process \n") ;
        printf("\nSum of odd no. is %d",&oddSum);
    }
    if(oddSum > evenSum)
        printf("\n Max  is %d",&oddSum);
    else
         printf("\n Max  is %d",&evenSum);
    return 0;
}