namespace ustmdevelopers.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime RespondedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string Tags { get; set; }
        public string Comments { get; set; }
        public int Rate { get; set; }




        public Answer( string Description, string Tags, int Rate, DateTime ModifiedDate, DateTime RespondedDate)
        {
            this.Description = Description;
            this.Tags = Tags;
            this.Rate = Rate;
            this.ModifiedDate = ModifiedDate;
            this.RespondedDate = RespondedDate;
        }
    }
}
