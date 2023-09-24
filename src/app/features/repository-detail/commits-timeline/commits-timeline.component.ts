import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GithubCommitAPI } from '../../../shared/model/github/github-commit.model';
import * as moment from 'moment';

const DATE_PATTERN = 'YYYY-MM-DD';

interface TimelineItem {
    date: Date;
    commits: GithubCommitAPI[];
}

@Component({
    selector: 'wmd-commits-timeline',
    templateUrl: './commits-timeline.component.html',
    styleUrls: ['./commits-timeline.component.scss'],
})
export class CommitsTimelineComponent implements OnInit {
    @Input() commits!: GithubCommitAPI[];

    dataset: TimelineItem[] = [];
    paginatedItems: TimelineItem[] = [];
    page = 1;
    pageSize = 10;
    pagesCount = 1;

    @ViewChild('timeline', {static: false})
    public timeline!: ElementRef;

    ngOnInit() {
        const dateKeys = new Set(this.commits.map((commit) => moment(commit.commit!.committer!.date).format(DATE_PATTERN)));
        this.dataset = Array.from(dateKeys).map((date) => ({
            date: moment(date).toDate(),
            commits: this.commits.filter((commit) => moment(commit.commit!.committer!.date).format(DATE_PATTERN) === date),
        }));
        this.paginateCommits();
        this.pagesCount = Math.ceil(this.dataset.length / this.pageSize);
    }

    paginateCommits(): void {
        this.paginatedItems = this.dataset.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
    }

    next(): void {
        if (this.page < this.pagesCount) {
            this.page++;
            this.paginateCommits();
            this.timeline.nativeElement.scrollIntoView({behavior: 'smooth'});
        }
    }

    previous(): void {
        if (this.page > 1) {
            this.page--;
            this.paginateCommits();
            this.timeline.nativeElement.scrollIntoView({behavior: 'smooth'});
        }
    }
}
