using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ustmdevelopers.Models;

namespace ustmdevelopers.Data;

public class InitDbContex : DbContext
{
    public InitDbContex(DbContextOptions<InitDbContex> options) : base(options)
    {
    }

    public DbSet<Question> Questions { get; set; }
}
