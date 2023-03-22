/**
            Sequence Generator

        Write a generator sequence_gen(sequenceGen in JavaScript) that,
        given the first terms of a sequence will generate a (potentially) infinite
        amount of terms, where each subsequent term is the sum of the previous x
        terms where x is the amount of initial arguments
        (examples of such sequences are the Fibonacci, Tribonacci and Lucas
            number sequences)

            Examples

            fib = sequenceGen(0, 1)
            fib.next().value = 0 // first term (provided)
            fib.next().value = 1 // second term (provided)
            fib.next().value = 1 // third term (sum of first and second terms)
            fib.next().value = 2 // fourth term (sum of second and third)
            fib.next().value = 3 // fifth term (sum of third and fourth)
            fib.next().value = 5 // sixth term (sum of fourth and fifth)
            fib.next().value = 8 // seventh term (sum of fifth and sixth)


            trib = sequenceGen(0, 1, 1)
            trib.next().value = 0 // first term (provided)
            trib.next().value = 1 // first term (provided)
            trib.next().value = 1 // first term (provided)
            trib.next().value = 2 // (sum of previous 3 terms)
            trib.next().value = 4 // (sum of previous 3 terms)
            trib.next().value = 7 // (sum of previous 3 terms)


            Note: You can assume you will get at least one argument and any
            arguments given will be valid (positive or negative integers) so
            no error checking is needed.

            **Note, Ruby users, sequence_gen should return an Enumerator object
 */
