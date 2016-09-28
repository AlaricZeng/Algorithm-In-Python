var WIDTH = 100;
var HEIGHT = 100;
var Maze = new Array(WIDTH);
for (var i = 0; i < WIDTH; i++)
{
	Maze[i] = new Array(HEIGHT);
}

function generateMaze()
{
	for (var i = 0; i < WIDTH; i++)
	{
		for (var j = 0; j < HEIGHT; j++)
		{
			Maze[i][j] = 1;
		}
	}
	start_width = 1;
	start_height = 1;
	while (start_width % 2 != 0)
		start_width = Math.floor(Math.random() * WIDTH);
	while (start_height % 2 != 0)
		start_height = Math.floor(Math.random() * HEIGHT);

	Maze[start_width][start_height] = 0;
	
	//Drawing DIV
	var x = 20;
	var y = 20;
	for (var i = 0; i < WIDTH; i++)
	{
		for (var j = 0; j < HEIGHT; j++)
		{
			var iDiv = document.createElement('div');
			iDiv.className = 'Block';
			iDiv.style.left = x + "px";
			iDiv.style.top = y + "px";
			iDiv.id = "Block_" + i + "_" + j;
			x += 20;
			document.getElementsByTagName('body').item(0).appendChild(iDiv);
		}
		x = 20;
		y += 20;
	}
	var startDiv = document.getElementById("Block_" + start_width + "_" + start_height);
	startDiv.style.backgroundColor = "#FF0000";
	
	depthFirstSearch(start_width, start_height);
}

function depthFirstSearch(row, column)
{
	var Direction = generateRandom();
	for (var i = 0; i < Direction.length; i++)
	{
		(function(i)
		{
			setTimeout(function()
			{
				switch (Direction[i])
				{
				case 1:
					if ((row - 2 > 0) && (Maze[row - 2][column] != 0))
					{
						Maze[row - 2][column] = 0;
						Maze[row - 1][column] = 0;
						var MoveDiv = document.getElementById("Block_" + (row - 2) + "_" + column);
						MoveDiv.style.backgroundColor = "#FF0000";
						MoveDiv = document.getElementById("Block_" + (row - 1) + "_" + column);
						MoveDiv.style.backgroundColor = "#FF0000";
						//window.setTimeout(function() {depthFirstSearch(row - 2, column);}, 300);
						depthFirstSearch(row - 2, column);
					}
					break;
				case 2:
					if ((column + 2 < WIDTH ) && (Maze[row][column + 2] != 0))
					{
						Maze[row][column + 2] = 0;
						Maze[row][column + 1] = 0;
						var MoveDiv = document.getElementById("Block_" + row + "_" + (column + 2));
						MoveDiv.style.backgroundColor = "#FF00FF";
						MoveDiv = document.getElementById("Block_" + row + "_" + (column + 1));
						MoveDiv.style.backgroundColor = "#FF00FF";
						//window.setTimeout(function() {depthFirstSearch(row, column + 2);}, 300);
						depthFirstSearch(row, column + 2);
					}
					break;
				case 3:
					if ((row + 2 < HEIGHT) && (Maze[row + 2][column] != 0))
					{
						Maze[row + 2][column] = 0;
						Maze[row + 1][column] = 0;
						var MoveDiv = document.getElementById("Block_" + (row + 2) + "_" + column);
						MoveDiv.style.backgroundColor = "#0000FF";
						MoveDiv = document.getElementById("Block_" + (row + 1) + "_" + column);
						MoveDiv.style.backgroundColor = "#0000FF";
						//window.setTimeout(function() {depthFirstSearch(row + 2, column);}, 300);
						depthFirstSearch(row + 2, column);
					}
					break;
				case 4:
					if ((column - 2 > 0 ) && (Maze[row][column - 2] != 0))
					{
						Maze[row][column - 2] = 0;
						Maze[row][column - 1] = 0;
						var MoveDiv = document.getElementById("Block_" + row + "_" + (column - 2));
						MoveDiv.style.backgroundColor = "#00FF00";
						MoveDiv = document.getElementById("Block_" + row + "_" + (column - 1));
						MoveDiv.style.backgroundColor = "#00FF00";
						depthFirstSearch(row, column - 2);
						//window.setTimeout(function() {depthFirstSearch(row, column - 2);}, 300);
					}
					break;
				}
			}, 300 * i);
		}(i));
	}
}

function shuffle(lst)
{
	var i, temp, j;
		for (i = lst.length; i > 0; i--)
		{
			j = Math.floor(Math.random() * i);
			temp = lst[i - 1];
			lst[i - 1] = lst[j];
			lst[j] = temp;
		}
}

function generateRandom()
{
	var random = new Array();
	for (var i = 1; i < 5; i++)
	{
		random.push(i);
	}
	shuffle(random);
	return random;
}

generateMaze(WIDTH, HEIGHT);