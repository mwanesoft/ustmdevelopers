using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ustmdevelopers.Models;

namespace ustmdevelopers.Data;

public class InitDbContext : DbContext
{
    public InitDbContext(DbContextOptions<InitDbContext> options) : base(options)
    {
    }

    public DbSet<Question> Questions { get; set; }

    public DbSet<Answer> Answers { get; set; }
}
