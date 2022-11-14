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

    // public Question(int id, string title, string content, int userId, DateTime postedDate, DateTime modifiedDate){
    //     Id = id;
    //     Title = title;
    //     Content = content;
    //     UserId = userId;
    //     PostedDate = postedDate;
    //     ModifiedDate = modifiedDate;
    // }

    public ICollection<Answer> Answers { get; set; } = new List<Answer>();


}
