using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ustmdevelopers.Models;

public class Answer
{
    public int Id {get; set;}
    public string Content {get; set;}
    public DateTime PostedDate {get; set;}
    public DateTime ModifiedDate {get; set;}

    public Answer(int id, string content,  DateTime postedDate, DateTime modifiedDate){
        Id = id;
        Content = content;
        PostedDate = postedDate;
        ModifiedDate = modifiedDate;
    }



}
