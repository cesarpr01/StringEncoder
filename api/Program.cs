
using static System.Net.Mime.MediaTypeNames;

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:4200");
                      });
});

var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/", () => "Hello World!");

CancellationTokenSource cancellationTokenSource = null;

app.MapGet("/Encoder/",async (string text) =>
    {
        cancellationTokenSource = new CancellationTokenSource();
        CancellationToken cancellationToken = cancellationTokenSource.Token;
        try
        {
            async IAsyncEnumerable<char> EncodeStreamAsync()
            {
                var plainTextBytes = System.Text.Encoding.UTF8.GetBytes(text);
                text = Convert.ToBase64String(plainTextBytes);

                foreach (var i in text)
                {
                    var delay = new Random().Next(1, 5) * 1000;                    
                    await Task.Delay(delay, cancellationToken);

                    yield return i;
                }
            }
            return EncodeStreamAsync();
        }
        catch (TaskCanceledException cte)
        {
            throw;
        }
        
    });

    app.MapGet("/Cancel/", async() =>
    {
        cancellationTokenSource.Cancel();
    });


app.Run();
