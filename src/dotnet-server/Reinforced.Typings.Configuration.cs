using Reinforced.Typings.Ast.TypeNames;
using Reinforced.Typings.Fluent;

namespace dotnet_server;
public static class ReinforcedTypingsConfiguration
{
    public static void Configure(Reinforced.Typings.Fluent.ConfigurationBuilder builder)
    {
        // gets rid of error warning in build time
        builder.Substitute(typeof(System.DateTime), new RtSimpleTypeName("any"));

        builder.Global(x =>
        {
            x.AutoOptionalProperties(true);
            x.CamelCaseForMethods(true);
            x.CamelCaseForProperties(true);

            // be consistent across platforms
            x.NewLine("\n");
            x.TabSymbol("  ");
            x.RootNamespace("dotnet_server");

            x.UseModules(true, true);
        });

    }
}
