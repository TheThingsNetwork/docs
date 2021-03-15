package main

import (
	"fmt"
	"os"
	"path/filepath"
)

func installHook(name string) (err error) {
	fmt.Printf("Installing %s hook\n", name)
	f, err := os.OpenFile(filepath.Join(".git", "hooks", name), os.O_WRONLY|os.O_CREATE|os.O_TRUNC, 0755)
	if err != nil {
		return err
	}
	defer func() {
		if closeErr := f.Close(); err == nil && closeErr != nil {
			err = closeErr
		}
	}()
	_, err = fmt.Fprintf(f, "HOOK=\"%s\" ARGS=\"$@\" go run %s\n", name, filepath.Join(".hooks", "run-hooks.go"));
	if err != nil {
		return err
	}
	return nil
}

var gitHooks = []string{"commit-msg"}

// InstallHooks installs git hooks that help developers follow our best practices.
func InstallHooks() error {
	for _, hook := range gitHooks {
		if err := installHook(hook); err != nil {
			return err
		}
	}
	return nil
}

func main() {
	if err := InstallHooks(); err != nil {
		fmt.Fprintf(os.Stderr, "error: %v\n", err)
		os.Exit(1)
	}
}
