var url = "http://localhost:8800/api/disnapis";

function postdisnapi() {

	console.log(url);

	var myName = $('#name').val();
	var myFileName = $('#fileName').val();
	var myImage = $('#image').val();

	var mydisneyapi = {
		name: myName,
		fileName: myFileName,
		image: myImage
	};
	console.log(mydisneyapi);

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function(data) {
			console.log(data);
			$('#resultado').html(JSON.stringify(data.disneyapi));
		},
		data: JSON.stringify(mydisneyapi)
	});
}

function getdisnapis() {
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);

                var arrdisnapis = json.disneyapis;

                var htmlTabledisnapis = '<table border="1">';

                arrdisnapis.forEach(function(item) {
                    console.log(item);
                    htmlTabledisnapis += '<tr>' +
                        '<td>' + item.id + '</td>' +
                        '<td>' + item.name + '</td>' +
                        '<td>' + item.fileName + '</td>' +
                        '<td>"<img src=' + item.image + '"style=",ax-width:150px; maxx heigth: 150px;"></td>' +
                        '</tr>';
                });

                htmlTabledisnapis += '</table>';

                $('#resultado').html(htmlTabledisnapis);
                    }
    );
}




