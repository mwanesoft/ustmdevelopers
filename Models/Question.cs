using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ustmdevelopers.Models;

public class Question
{
    public int Id {get; set;}
    public string Title {get; set;}
    public string Content {get; set;}
    public int UserId {get; set;}
    public DateTime PostedDate {get; set;}
    public DateTime ModifiedDate {get; set;}

    
}
