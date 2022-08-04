namespace dotnet_server.Controllers;

public class PersonEndpoint : BaseEndpoint
{
    [HttpPost("api/person")]
    public Result Index(Person model)
    {
        if (model.EmailAddress.Contains("gmail.com"))
        {
            ModelState.AddModelError(nameof(model.EmailAddress), "We do not allow emails from gmail.");
            ModelState.AddModelError(nameof(model.EmailAddress), "Testing second errors.");

            return new Result().Invalid(ModelState);
        }

        return new Result().Success("Looks good to the server.");

    }
}
