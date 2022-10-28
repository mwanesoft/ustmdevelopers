using Microsoft.AspNetCore.Identity;

namespace ustmdevelopers.Models;

public class Question
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public DateTime AskedDate { get; set; }
    public DateTime ModifiedDate { get; set; }
    public int ViewedTimes { get; set; }
    public string Tags { get; set; }
    public string Comments { get; set; }
    public int Rate { get; set; }

    public ICollection<Answer> Answers { get; set; } = new List<Answer>();



    public Question(string Title, string Description, string Tags, int ViewedTimes, DateTime ModifiedDate, DateTime AskedDate)
    {
        this.Title = Title;
        this.Description = Description;
        this.Tags = Tags;
        this.ViewedTimes = ViewedTimes;
        this.ModifiedDate = ModifiedDate;
        this.AskedDate = AskedDate;
    }
}
