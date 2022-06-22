import { assertEquals, assertStringIncludes } from "https://deno.land/std@0.144.0/testing/asserts.ts";
import { appPaths } from "../mod.ts";

Deno.test("basic functionality", () => {
  const random = Math.random().toString(36).slice(2);
  const appName = `com.yourorg.yourapp-${random}`;

  const paths = appPaths(appName);

  // console.log({ paths, appName });

  assertEquals(appName, appName);
  assertStringIncludes(paths.cache, appName);
  assertStringIncludes(paths.config, appName);
  assertStringIncludes(paths.data, appName);
  assertStringIncludes(paths.log, appName);
  assertStringIncludes(paths.temp, appName);
});
