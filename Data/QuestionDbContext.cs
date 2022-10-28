using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using ustmdevelopers.Models;

namespace ustmdevelopers.Data;

public class QuestionDbContext : DbContext
{
    public QuestionDbContext(DbContextOptions<QuestionDbContext> options) : base(options)
    {

    }


    public DbSet<Question> Questions { get; set; }
}
