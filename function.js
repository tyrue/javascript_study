function hello()
{
    alert("hello world");
}

function list(num) {
    for (var i = 0; i < num; i++) {
        document.write('<li>' + i + '</li>');
        //document.createElement('<li>' + i + '</li>');
    }
}

var Body = 
{
    setColor : function(color)
    {
        $('body').css('color', color);
        // document.querySelector('body').style.color = color;
    },
    setBackgroundColor : function(color)
    {
        $('body').css('backgroundColor', color);
        // document.querySelector('body').style.backgroundColor = color;
    }
}

var Links = 
{
    setColor : function(color)
    {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length)
        // {
        //     alert[i].style.color = color;
        //     i++;
        // }
        $('a').css('color', color);
    }
}

function night_day(self) {
    if (self.value === 'day') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'night'

        Links.setColor('blue');
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'day'

        Links.setColor('red');
    }
}