def longest_sub(lst):
 	Lst_Len = [0 for i in range(len(lst))]
 	Lst_Len[0] = 1;
 	for i in range(len(lst)):
 		for j in range(i):
 			if lst[i] >= lst[j] and Lst_Len[i] <= Lst_Len[j] + 1:
 				Lst_Len[i] = Lst_Len[j] + 1

 	max = 0;
 	for i in range(len(lst)):
 		if max < Lst_Len[i]:
 			max = Lst_Len[i]

 	print(max)

longest_sub([5, 2, 7, 4, 3, 8])