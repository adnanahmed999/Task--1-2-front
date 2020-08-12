function grades( datalist )
{	
	var dataary = [];

	datalist.forEach( function(element)
  	{	
		var dataobj = { Name:"", Score:{Maths:"", Science:"" }};

	    var x= element.split(" ")

	    dataobj.Name = x[0]+" "+x[1]
	    dataobj.Score.Maths = parseInt(x[2])
	    dataobj.Score.Science = parseInt(x[3])

	    dataary.push(dataobj)     
  	}
    )

	for(let i=0; i<dataary.length; i++ )
		{
			for(let j=(i+1); j<dataary.length; j++ )
				{
					if( (dataary[i].Score.Maths+dataary[i].Score.Science) < (dataary[j].Score.Maths+dataary[j].Score.Science)  )
						{	
							let temp = dataary[i]
							dataary[i] = dataary[j]
							dataary[j] = temp;
						}
				}
		}

		console.log(dataary)

}




grades( ["Rashmil Panchani 30 60", "Parag Vaid 40 30", "Siddharth Sanghavi 35 45"  ])