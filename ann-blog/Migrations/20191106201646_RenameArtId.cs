using Microsoft.EntityFrameworkCore.Migrations;

namespace annblog.Migrations
{
    public partial class RenameArtId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ArtPhotos_Arts_ArtId",
                table: "ArtPhotos");

            migrationBuilder.DropColumn(
                name: "PostId",
                table: "ArtPhotos");

            migrationBuilder.AlterColumn<int>(
                name: "ArtId",
                table: "ArtPhotos",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_ArtPhotos_Arts_ArtId",
                table: "ArtPhotos",
                column: "ArtId",
                principalTable: "Arts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ArtPhotos_Arts_ArtId",
                table: "ArtPhotos");

            migrationBuilder.AlterColumn<int>(
                name: "ArtId",
                table: "ArtPhotos",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<int>(
                name: "PostId",
                table: "ArtPhotos",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_ArtPhotos_Arts_ArtId",
                table: "ArtPhotos",
                column: "ArtId",
                principalTable: "Arts",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
