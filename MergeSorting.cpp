#include <iostream>
using namespace std;
bool hasItems = false;

void Merge(int* arr, int start, int middle, int end, int S)
{
	start = start - 1;
	int* left = new int[middle - start + 1];
	int* right = new int[end - middle + 1];
	for (int i = 0; i < middle - start; i++)
	{
		left[i] = arr[i + start];
	}
	for (int j = 0; j < end - middle; j++)
	{
		right[j] = arr[j + middle];
	}
	left[middle] = 100000;
	right[end] = 100000;

	int i = 0;
	int j = 0;
	for (int k = 0; k < (end - start); k++)
	{
		//cout << left[i] + right[j] << endl;
		if (S == left[i] + right[j])
		{
			hasItems = true;
			break;
		}
		else if (S > left[i] + right[j])
		{
			if (left[i] < right[j])
			{
				arr[k] = left[i];
				i++;
			}
			else
			{
				arr[k] = right[j];
				j++;
			}
		}
		else
		{
			break;
		}
	}
}

void merge_sort(int* arr, int start, int end, int S)
{
	if (hasItems)
		return;
	else if (start < end)
	{
		int middle = (start + end) / 2;
		merge_sort(arr, start, middle, S);
		merge_sort(arr, middle + 1, end, S);
		Merge(arr, start, middle, end, S);
	}
}

int main()
{
	int A[5] = { 2, 3, 5, 7 };
	int S = 70;
	merge_sort(A, 1, 4, S);
	//cout << "aaa" << endl;
	if (hasItems)
	{
		cout << "Yes" << endl;
	}
	else
	{
		cout << "No" << endl;
	}
	//cout << hasItems << endl;
	return 0;
}