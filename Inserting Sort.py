def Inserting_Merge(lst, n):
	if n == 1:
		return
	else:
		n -= 1
		Inserting_Merge(lst, n)
		i = n - 1
		while (i >=0 and lst[n] < lst[i]):
			t = lst[i]
			lst[i] = lst[n]
			lst[n] = t
			n = i
			i -= 1

lst = [5, 6, 3, 2, 1]
Inserting_Merge(lst, 5)
print(lst)

