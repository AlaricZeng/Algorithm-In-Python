#include "DepthFirst.h"

Nodes::Nodes(int v)
{
	this->iNodeNum = v;
	this->iAdj = new std::list<int>[this->iNodeNum];
	this->TracedNode = new bool[v];
	for (int i = 0; i < v; i++)
	{
		this->TracedNode[i] = false;
	}
}	

bool Nodes::AddAdj(int v, int w)
{
	this->iAdj[v].push_back(w);
	return true;
}

void Nodes::DepthFirstSearch(int v)
{
	this->TracedNode[v] = true;
	std::cout << v << " ";
		std::list<int>::iterator i;
		for (i = this->iAdj[v].begin(); i != this->iAdj[v].end(); i++)
		{
			if (!this->TracedNode[*i])
			{
				this->DepthFirstSearch(*i);
			}
		}
}
