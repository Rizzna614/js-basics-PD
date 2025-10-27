let visitorAge = 12;
isStudent = true;

function printTicketPrice (visitorAge, isStudent)
{
if (visitorAge <= 6)
{
   return "Biļete ir bez maksas"
} else if (isStudent == true)
{
    return "Biļetes cena ir 5 eiro"
} else
{
    return "Biļetes cena ir 10eiro"
}
};

console.log(printTicketPrice(12, true));

console.log(printTicketPrice(35, false));
