def Merge(lst, p, q, r):
	p = p - 1
	L = lst[p : q]
	R = lst[q : r]
	i = 0
	j = 0
	len1 = q - p # length of L
	len2 = r - q # length of R

	for k in range(p, r):
		if i >= q - p:
			lst[k] = R[j]
			j += 1
		elif j >= r - q:
			lst[k] = L[i]
			i += 1
		elif L[i] < R[j]:
			lst[k] = L[i]
			i += 1
		else:
			lst[k] = R[j]
			j += 1

def Merge_Sort(lst, p, r):
	if p < r:
		q = int((r + p) / 2)
		Merge_Sort(lst, p, q)
		Merge_Sort(lst, q + 1, r)
		Merge(lst, p, q, r)

A = [3, 41, 52, 26, 38, 57, 9, 49]
Merge_Sort(A, 1, len(A))
print(A)
