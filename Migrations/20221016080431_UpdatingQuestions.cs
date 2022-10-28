using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ustmdevelopers.Migrations
{
    public partial class UpdatingQuestions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "AskedDate",
                table: "Questions",
                type: "datetime",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "ModifiedDate",
                table: "Questions",
                type: "datetime",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "Tags",
                table: "Questions",
                type: "longtext",
                nullable: false)
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.AddColumn<int>(
                name: "ViewedTimes",
                table: "Questions",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AskedDate",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ModifiedDate",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "Tags",
                table: "Questions");

            migrationBuilder.DropColumn(
                name: "ViewedTimes",
                table: "Questions");
        }
    }
}
