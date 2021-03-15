package main

import (
	"bufio"
	"errors"
	"fmt"
	"os"
	"strings"
)

var gitCommitPrefixes = []string{
	"doc",
	"util",
}

func commitMsg(messageFile string) error {
	fmt.Println("Running commit-msg hook")
	if messageFile == "" {
		messageFile = ".git/COMMIT_EDITMSG"
	}
	f, err := os.Open(messageFile)
	if err != nil {
		return err
	}
	defer f.Close()
	s := bufio.NewScanner(f)
	s.Scan()
	commitMsg := s.Text()

	if commitMsg == "" {
		return errors.New("commit message must not be empty")
	}

	if strings.HasPrefix(commitMsg, "fixup! ") || strings.HasPrefix(commitMsg, "Merge ") {
		return nil
	}

	// Check length:
	switch {
	case len(commitMsg) > 72:
		return errors.New("commit message must be shorter than 72 characters")
	case len(commitMsg) > 50:
		// TODO: Warn.
	}

	// Check topics: Message structure:
	split := strings.SplitN(commitMsg, ": ", 2)
	if len(split) != 2 {
		return fmt.Errorf("commit message must contain topics from %s",
			strings.Join(gitCommitPrefixes, ","))
	}

	// Check topics:
	topics := strings.Split(split[0], ",")
	var unknownTopics []string
nextTopic:
	for _, topic := range topics {
		for _, allowed := range gitCommitPrefixes {
			if strings.TrimSpace(topic) == allowed {
				continue nextTopic
			}
		}
		unknownTopics = append(unknownTopics, topic)
	}
	if len(unknownTopics) > 0 {
		return fmt.Errorf("commit messages must only topics from %s (and not %s)",
			strings.Join(gitCommitPrefixes, ","),
			strings.Join(unknownTopics, ","))
	}

	words := strings.Fields(split[1])

	// Casing:
	if words[0][0] < 'A' || words[0][0] > 'Z' {
		return fmt.Errorf("commit messages must start with a capital letter (and %s doesn't)", words[0])
	}

	// Punctuation:
	if strings.HasSuffix(commitMsg, ".") {
		return fmt.Errorf("commit messages must not end with punctuation")
	}

	// Imperative
	if strings.HasSuffix(words[0], "ed") || strings.HasSuffix(words[0], "ing") {
		// TODO: Warn that Commit messages should use imperative mood
	}

	return nil
}

// RunHook runs the Git hook for $HOOK, arguments are taken from $ARGS.
func RunHook() error {
	hook, args := os.Getenv("HOOK"), strings.Fields(os.Getenv("ARGS"))
	switch hook {
	case "pre-commit":
		fmt.Println("Running pre-commit hook with", args)
		return nil
	case "commit-msg":
		var messageFile string
		if len(args) > 0 {
			messageFile = args[0]
		}
		return commitMsg(messageFile)
	case "pre-push":
		fmt.Println("Running pre-push hook with", args)
		return nil
	default:
		return fmt.Errorf("Unknown hook %s", hook)
	}
}

func main() {
	if err := RunHook(); err != nil {
		fmt.Fprintf(os.Stderr, "error: %v\n", err)
		os.Exit(1)
	}
}
