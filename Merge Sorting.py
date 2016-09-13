import math

def Merge(lst, p, q, r):

    p -= 1
    L = lst[p : q]
    R = lst[q : r]

    i = 0
    j = 0
    L.append(float("inf"))
    R.append(float("inf"))
    
    
    for k in range(p, r):
       if L[i] < R[j]:
           lst[k] = L[i]
           i += 1
       else:
            lst[k] = R[j]
            j += 1

def Merge_Sort(lst, p, r):
    q = int((p + r) / 2)
    if p < r:
        Merge_Sort(lst, p, q)
        Merge_Sort(lst, q + 1, r)
        Merge(lst, p, q, r)

list1 = [1, 5, 6, 8, 10, -5, 5, 145, 20]
Merge_Sort(list1, 1, len(list1))
print(list1)
