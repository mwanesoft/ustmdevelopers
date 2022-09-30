using Microsoft.AspNetCore.Identity;

namespace ustmdevelopers.Models;

public class Question
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    

    public Question(string Title, string Description){
        this.Title = Title;
        this.Description = Description;
    }
}
