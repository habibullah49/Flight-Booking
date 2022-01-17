function handleTicketChnage(ticket,isIncrease){
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if(isIncrease == true){
        ticketNewCount = ticketCount + 1;
    }
    if(isIncrease == false && ticketCount > 0){
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    
    let totalTicket = 0;
    if(ticket == 'first-class'){
        totalTicket = ticketNewCount * 150;
    }
    if(ticket == 'economy-class'){
       totalTicket = ticketNewCount * 100;
    }
    calculateTotal();
}


function calculateTotal(){
    let firstClassTicketCount = getInputvalue('first-class');
    document.getElementById('table-heading-2').innerText = firstClassTicketCount;
    let economyClassTicketCount = getInputvalue('economy-class');
    document.getElementById('table-heading-5').innerText = economyClassTicketCount;

    const totalTicket = firstClassTicketCount + economyClassTicketCount;
    document.getElementById('table-heading-8').innerText ='Total Ticket: '+totalTicket;

    const firstClassTicketPrice =Math.round((firstClassTicketCount * 150)+(firstClassTicketCount * 15));
    document.getElementById('table-heading-3').innerText ='$' + firstClassTicketPrice;

    const economyClassTicketPrice =Math.round((firstClassTicketCount * 100)+(firstClassTicketCount * 10));
    document.getElementById('table-heading-6').innerText ='$' + firstClassTicketPrice;

    firstClassTicketCount = firstClassTicketCount * 150;
    economyClassTicketCount = economyClassTicketCount * 100;
    const totalPrice = firstClassTicketCount + economyClassTicketCount;
    document.getElementById('ticket-price').innerText ='$'+totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$'+tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$'+grandTotal;
    document.getElementById('table-heading-9').innerText ='Total Price: $'+grandTotal;


}


function getInputvalue(ticket){
    const ticketInput = document.getElementById(ticket + '-input');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;

}

document.getElementById("book-now-button").addEventListener('click',function(){
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('table-design').style.display = 'block';
})


document.getElementById('table-heading-1').innerText = 'First Class ($150)';
document.getElementById('table-heading-4').innerText = 'Economy Class ($100)';



