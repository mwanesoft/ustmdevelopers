
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Duende.IdentityServer.EntityFramework.Options;
using ustmdevelopers.Models;

namespace ustmdevelopers.Data;

public class AnswerDbContext : DbContext
{
    public AnswerDbContext(DbContextOptions<AnswerDbContext> options) : base(options)
    {

    }

    public DbSet<Answer> Answers { get; set; }
}
