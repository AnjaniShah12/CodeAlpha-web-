def fibonacci(n):
    fib_series = []
    a, b = 0, 1
    for _ in range(n):
        fib_series.append(a)
        a, b = b, a + b  # Update a and b to the next two Fibonacci numbers
    return fib_series

# Test the function
n = int(input("Enter the number of Fibonacci terms: "))
fib_series = fibonacci(n)
print("Fibonacci series:", fib_series)
