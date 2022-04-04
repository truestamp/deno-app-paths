import { assertStringIncludes } from "https://deno.land/std@0.133.0/testing/asserts.ts";
import appPaths from "./mod.ts";

Deno.test("that it throws no errors", () => {
  const random = Math.random().toString(36).slice(2);
  const appName = `com.yourorg.yourapp-${random}`;

  const paths = appPaths(appName);

  console.log({ paths, appName });

  assertStringIncludes(paths.cache, appName);
  assertStringIncludes(paths.config, appName);
  assertStringIncludes(paths.data, appName);
  assertStringIncludes(paths.log, appName);
  assertStringIncludes(paths.temp, appName);
});
