A = [1, 1, 0, 1, 1, 0, 1, 1]
B = [1, 0, 1, 1, 1, 1, 0, 1]
C = []

Rest = 0
j = len(A) - 1
C = [0] * (j + 2)

while j > -1:
    C[j + 1] = A[j] + B[j] + Rest
    if C[j + 1] >= 2:
        Rest = 1
        C[j + 1] -= 2
    else:
        Rest = 0
    j -= 1

if Rest == 0:
    C[0] = 0
else:
    C[0] = 1

print(C)
