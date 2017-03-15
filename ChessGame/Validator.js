//en passen 1
//castling 2
//normal 0
//invalid -1
function Validator()
{
	this.validateMove = function(prevCol,prevRow,clickedCol,clickedRow)
	{
		//first condition the move follow the rule
		var value = recorder.moveMap[prevCol][prevRow];
		if(Math.abs(value) == WHITE_PAWN_VALUE)//pawn is a little bit different it move straight but attack diagonally
		{
			if(prevRow == 6)
			{
				if(clickedRow != prevRow - 1 || clickedRow != prevRow - 2)
					return -1;
			}
			else
			{
				if(clickedRow != prevRow - 1)
					return -1;
			}
			return true;
		}
		if(Math.abs(value) == WHITE_KING_VALUE)
		{
			//what about the computer side ?
			if((clickedCol == prevCol - 2 && clickedRow == 7 )||(clickedCol == prevCol + 2 && clickedRow == 7))
				{
					if(prevCol == 4 && prevRow == 7)
					{
						if(this.validateCastling())
							return 2;
						else return -1;
					}
				}
		}
	
		if(value < 0)
		{
			if(recorder.blackAttackMap[clickedCol][clickedRow].indexOf(value) != -1)
				return 0;
		}
		else
		{
			if(recorder.whiteAttackMap[clickedCol][clickedRow].indexOf(value) != -1)
				return 0;
		}
		//second condition the move cannot make the king in danger
		//bishop rook queen
		return -1;
	}
	//Lâm viết cái này nhé 
	this.detectCheck = function()
	{
		//if the king stay on attackMap of opponent
	}
	//Đức viết cái này nhé
	this.validateCastling = function()
	{
		//if king has moved ?
		//the squares between king and rook are attacked by any pieces ?
		
	}
	//Minh viết cái này nhé
	this.validateCheckmate = function()
	{
		
	}
	//predict the checking condition
}